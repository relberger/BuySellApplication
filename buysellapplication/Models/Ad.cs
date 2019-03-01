using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BuySellApi.Models
{
    public class Ad
    {
        public long ID { get; set; }
        public string Title { get; set; }
        public DateTime AddedOn { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        public int pageNumber { get; set; }
    }
}