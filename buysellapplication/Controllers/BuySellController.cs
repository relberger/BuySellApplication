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

            if (_context.BuySellItems.Count() == 0)
            {
                // create new BuySellItem if collection is empty - can't delete all BuySellItems
                _context.BuySellItems.Add(new BuySellItem { Name = "Item1" });
                _context.SaveChanges();
            }
        }
    }
}
