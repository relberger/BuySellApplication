using Microsoft.EntityFrameworkCore;

namespace BuySellApi.Models
{
    public class BuySellContext : DbContext
    {
        public BuySellContext(DbContextOptions<BuySellContext> options) : base(options)
        {
        }

        public DbSet<BuySellItem> BuySellItems { get; set; } 
    }
}