package com.alacriti.group.rest;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.MessageBodyReader;
import javax.ws.rs.ext.MessageBodyWriter;
import javax.ws.rs.ext.Provider;

import org.apache.log4j.Logger;

import com.alacriti.rest.request.handler.UserHandler;
import com.google.gson.Gson;



@Provider
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GSONProvider implements MessageBodyWriter<Object>, MessageBodyReader<Object>
{
	private Logger log = Logger.getLogger(UserHandler.class);
    public static final String UTF_8 = "UTF-8";
   
    public GSONProvider()
    {
        log.info("Created instance of: " + this.getClass().getName());
    }

    @Override
    public boolean isReadable(Class<?> type, Type genericType, java.lang.annotation.Annotation[] annotations,
            MediaType mediaType)
    {
        return true;
    }

    @Override
    public Object readFrom(Class<Object> type, Type genericType, Annotation[] annotations, MediaType mediaType,
            MultivaluedMap<String, String> httpHeaders, InputStream entityStream) throws IOException
    {
        log.info("readFrom: " + type.getName() + " MediaType: " + mediaType);        
        InputStreamReader reader = new InputStreamReader(entityStream, UTF_8);        
        return reader;
    }

    @Override
    public boolean isWriteable(Class<?> type, Type genericType, Annotation[] annotations, MediaType mediaType)
    {
        log.info("isWriteable: " + type.getName() + " MediaType: " + mediaType);
        return true;
    }

    @Override
    public long getSize(Object object, Class<?> type, Type genericType, Annotation[] annotations, MediaType mediaType)
    {
        return -1;
    }

    @Override
    public void writeTo(Object object, Class<?> type, Type genericType, Annotation[] annotations, MediaType mediaType,
            MultivaluedMap<String, Object> httpHeaders, OutputStream out) throws IOException, WebApplicationException
    {
        log.info("writeTo: Ojbect: " + object.getClass().getName() + " MediaType: "   + mediaType);
        try
        {
            Gson gson = new Gson();
            String msg = gson.toJson(object);
            out.write(msg.getBytes());
            out.flush();
        }
        finally
        {
            out.close();
        }
    }
}
