using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MlApiComp.Models;

namespace MlApiComp.Controllers
{
    [Route("api/[controller]")]
    public class ExperimentsController : Controller
    {
        private static int counter;

        [HttpPost]
        public IActionResult CreateExperiment([FromBody]Experiment experiment)
        {
            experiment.Id = counter++;

            return Ok(experiment);
        }
    }
}
