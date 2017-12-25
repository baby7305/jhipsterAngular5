package com.mycompany.myapp.service;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2017/10/17.
 */
public interface FileService {

    /**
     * 上传文件方法
     *
     * @return
     */
    String fileUpload(HttpServletRequest httpServletRequest, @RequestParam("test") MultipartFile file);
}
