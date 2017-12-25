package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.service.FileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2017/10/17.
 */
@RestController
@RequestMapping("/api")
public class FileResource {

    private static final Logger log = LoggerFactory.getLogger(FileResource.class);

    private final FileService fileService;

    public FileResource(FileService fileService) {
        this.fileService = fileService;
    }

    //文件上传相关代码
    @PostMapping(value = "/upload")
    @ResponseBody
    public String upload(HttpServletRequest httpServletRequest, MultipartFile file) {

        String result = fileService.fileUpload(httpServletRequest, file);
        return result;

    }
}
