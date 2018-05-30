using System;

namespace MlApiComp.Models
{
    public class File
    {
        public int Id { get; set; }

        public byte[] Content { get; set; }

        public string Name { get; set; }        

        public string AzureApiResult { get; set; }

        public string GoogleApiResult { get; set; }
    }
}
