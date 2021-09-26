using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;

namespace SafaGymApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentUploadController : ControllerBase
    {
        private readonly IHostEnvironment  _hostingEnvironment;
        private readonly ILogger _logger;



        public ContentUploadController(IHostEnvironment  hostingEnvironment, ILogger logger)
        {
            _hostingEnvironment = hostingEnvironment ?? throw new ArgumentNullException(nameof(hostingEnvironment));
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            string contentRootPath = _hostingEnvironment.ContentRootPath;
            _logger.LogInformation(contentRootPath);
            long size = files.Sum(f => f.Length);
            string returningURL = null;

            string pathDirectory = _hostingEnvironment.ContentRootPath + "\\uploads\\";

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

            return Ok(new { count = files.Count, size, fileUpload = true, filePath = returningURL.ToString() });
        }
    }
}
