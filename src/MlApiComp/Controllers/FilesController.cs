using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MlApiComp.Infrastructure;
using MlApiComp.Models;

namespace MlApiComp.Controllers
{
    [Route("api/[controller]")]
    public class FilesController : Controller
    {

        private readonly MlContext dbContext;

        public FilesController(MlContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Get(int id)
        {
            var image = dbContext.Files.Find(id);

            return Ok(image);
        }

        [HttpPost]
        public IActionResult Post(IFormFile file, [FromBody] String resultGoogle, [FromBody] String resultAzure)
        {
            if (file == null)
            {
                return BadRequest("You must upload a file with key as <file>!");
            }

            using (var fileStream = file.OpenReadStream())
            {
                using (var memoryStream = new System.IO.MemoryStream())
                {
                    fileStream.CopyTo(memoryStream);

                    var fileModel = new File();

                    fileModel.Content = memoryStream.ToArray();
                    fileModel.Name = file.FileName;
                    fileModel.AzureApiResult = "info from ml.component goes here AZURE";
                    fileModel.GoogleApiResult = "info from ml.component goes here GOOGLE";
                    

                    dbContext.Add(fileModel);
                    dbContext.SaveChanges();

                    return Ok(fileModel);
                }
            }

        }

        
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] File file)
        {
            if (file == null || file.Id != id)
            {
                return BadRequest();
            }

            var existingFile = dbContext.Files.Find(id);
            if (existingFile == null)
            {
                return NotFound();
            }

            existingFile.AzureApiResult = file.AzureApiResult;
            existingFile.GoogleApiResult = file.GoogleApiResult;
            existingFile.Name = file.Name;

            dbContext.Files.Update(existingFile);
            dbContext.SaveChanges();
            return NoContent();
        }
    }
}
