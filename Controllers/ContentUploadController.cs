using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SafaGymApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentUploadController : ControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public ContentUploadController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment ?? throw new ArgumentNullException(nameof(hostingEnvironment));
        }

        [HttpPost]
        public async Task<IActionResult> OnPostUploadAsync(List<IFormFile> files)
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
            string contentRootPath = _hostingEnvironment.ContentRootPath;
            long size = files.Sum(f => f.Length);
            string returningURL = null;

            string pathDirectory = _hostingEnvironment.WebRootPath + "\\uploads\\";

            if (!Directory.Exists(pathDirectory))
                Directory.CreateDirectory(pathDirectory);

            foreach (var formFile in files)
            {
                try
                {
                    if (formFile.Length > 0)
                    {
                        string fileName = Path.GetFileName(formFile.FileName);
                        if (fileName != null)
                        {
                            string path = Path.Combine(pathDirectory, fileName);

                            await using var stream = System.IO.File.Create(path);
                            returningURL = path;
                            await formFile.CopyToAsync(stream);
                        }
                    }
                }
                catch
                {
                    return Ok(new { count = files.Count, size, fileUpload = false, filePath = returningURL });
                }
            }

            return Ok(new { count = files.Count, size, fileUpload = true, filePath = returningURL });
        }
    }
}
