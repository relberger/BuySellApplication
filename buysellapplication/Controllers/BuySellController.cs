using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuySellApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BuySellApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuySellController : ControllerBase
    {
        private readonly BuySellContext _context;

        public BuySellController(BuySellContext context)
        {
            _context = context;

            if (_context.Ads.Count() == 0)
            {
                // create new BuySellItem if collection is empty - can't delete all BuySellItems
                _context.Ads.Add(new Ad { Title = "Item1" });
                _context.SaveChanges();
            }
        }

        //GET: api/BuySell/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Ad>> GetAdById(long id)
        {
            var ad = await _context.Ads.FindAsync(id);

            if (ad == null)
            {
                return NotFound();
            }

            return ad;
        }

        //GET: api/BuySell/{pageNumber}
        [HttpGet("{pageNumber}")]
        public async Task<ActionResult<IEnumerable<Ad>>> GetAllAds(int pageNumber)
        {
            var listAds = await _context.Ads.ToListAsync();
            List<Ad> ads = new List<Ad>();

            foreach (Ad ad in listAds)
            {
                if (ad.pageNumber == pageNumber)
                {
                    ads.Add(ad);
                }
            }

            return ads;
        }
    }
}
