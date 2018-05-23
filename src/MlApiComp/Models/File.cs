using System;

namespace MlApiComp.Models
{
    public class File
    {
        public int Id { get; set; }

        public byte[] Content { get; set; }

        public string Name { get; set; }        
    }
}
