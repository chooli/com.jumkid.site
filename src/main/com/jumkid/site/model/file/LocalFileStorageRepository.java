package com.jumkid.site.model.file;

/* 
 * This software is written by Jumkid and subject
 * to a contract between Jumkid and its customer.
 *
 * This software stays property of Jumkid unless differing
 * arrangements between Jumkid and its customer apply.
 *
 *
 * (c)2013 Jumkid All rights reserved.
 *
 * VERSION   | DATE      | DEVELOPER  | DESC
 * -----------------------------------------------------------------
 * 3.0        Dec2013      chooli      creation
 * 
 *
 */

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.channels.SeekableByteChannel;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.StandardOpenOption;

import net.coobird.thumbnailator.Thumbnails;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.jumkid.site.exception.MediaStoreServiceException;

public class LocalFileStorageRepository implements IFileStorageRepository<MediaFile> {
	
	protected final Log logger = LogFactory.getLog(this.getClass());
	
	private String dataHomePath;
	
	private int thumbnailSmall;
	
	private int thumbnailLarge;
	
	private static String THUMBNAIL_SMALL_SUFFIX = "_thmb";
	private static String THUMBNAIL_LARGE_SUFFIX = "_thmb_l";
	private static String THUMBNAIL_FORMAT = "png";

	@Override
	public MediaFile saveFile(byte[] bytes, MediaFile mfile) throws MediaStoreServiceException{
		
		if(bytes==null) return null;
		
		String daytimePath =  FilePathManager.getInstance().getLogicalPath();
		String categoryPath = FilePathManager.getInstance().getCategoryPath(mfile.getMimeType());
		String logicalPath = categoryPath + daytimePath;
		
		synchronized (mfile){
			try{
				mfile.setLogicalPath(logicalPath);
		        
				Path dirPath = Paths.get(dataHomePath, logicalPath);
		        Path path = Paths.get(dataHomePath, logicalPath, mfile.getUuid());
		        
		        SeekableByteChannel sbc = null;
		        if(Files.exists(path)){   //replace the existing file if it exists
		        	sbc = Files.newByteChannel(path, StandardOpenOption.WRITE,
		        	         				StandardOpenOption.TRUNCATE_EXISTING);
		        }else{
		        	if(!Files.exists(dirPath)) Files.createDirectories(dirPath);
		        	sbc = Files.newByteChannel(path, StandardOpenOption.WRITE,
		        								   StandardOpenOption.CREATE_NEW);
		        }
		        		        
		        try {		        	
		        	sbc.write(ByteBuffer.wrap(bytes));
		            
		        	mfile.setSize(new Long(bytes.length));
		        	
		        } catch (IOException ioe) {
		            ioe.printStackTrace();
		        } finally{
		        	sbc.close();
		        }
								
				//generate thumbnail for image
				if(mfile.getMimeType().startsWith("image/")){
					generateThumbnail(path);
				}
				
				return mfile;
				
			} catch (FileAlreadyExistsException fae) {
	        	logger.error("file is already exists "+fae.getMessage());
			} catch(Exception e){
				throw new MediaStoreServiceException(e.getMessage());
			}
			
		}
		
		return null;
		
	}

	@Override
	public synchronized FileChannel getFile(MediaFile mfile) throws MediaStoreServiceException {
		try{
			Path path = Paths.get(dataHomePath, mfile.getLogicalPath(), mfile.getUuid());
			
			if(!Files.exists(path)){
				logger.info("File "+path+" is not found.");
				return null;
			}
			@SuppressWarnings("resource")
			FileInputStream fin = new FileInputStream(new File(path.toString()));

			return fin.getChannel();
			
		}catch(Exception e){
			throw new MediaStoreServiceException(e.getMessage());
			//move to trash if 
		}
		
	}
	
	/**
	 * Get file from repository with random accessing
	 * 
	 * @param t
	 * @return
	 * @throws MediaStoreServiceException
	 */
	@Override
	public FileChannel getRandomAccessFile(MediaFile mfile) throws MediaStoreServiceException{
		try{
			Path path = Paths.get(dataHomePath, mfile.getLogicalPath(), mfile.getUuid());
			
			if(!Files.exists(path)){
				logger.info("File "+path+" is not found.");
				return null;
			}
			@SuppressWarnings("resource")
			RandomAccessFile aFile = new RandomAccessFile(path.toString(), "rw");

			return aFile.getChannel();
			
		}catch(Exception e){
			throw new MediaStoreServiceException(e.getMessage());
			//move to trash if 
		}
	}

	@Override
	public synchronized void deleteFile(MediaFile mfile) throws MediaStoreServiceException {
		Path path = Paths.get(dataHomePath, mfile.getLogicalPath(), mfile.getUuid());
		try{

			if(Files.deleteIfExists(path)){
				deleteThumbnail(mfile);
			}
			
		}catch(IOException e){
			if(!Files.exists(path)) return;
			logger.warn("Failed to remove file "+path);
			this.moveToTrash(path);
		}
	}
	
	@Override
	public FileChannel getThumbnail(MediaFile mfile, boolean large) throws MediaStoreServiceException {
		try{
			String logicalPath = mfile.getLogicalPath();
			String filePath = null;
			if(mfile.getMimeType().startsWith("image")){
				filePath = dataHomePath + logicalPath + "/" + mfile.getUuid() + 
							(large ? THUMBNAIL_LARGE_SUFFIX : THUMBNAIL_SMALL_SUFFIX)+"."+THUMBNAIL_FORMAT;
			}else
			if(mfile.getMimeType().startsWith("video")){
				filePath = dataHomePath + "/misc/icon_video.png";
			}else
			if(mfile.getMimeType().startsWith("audio")){
				filePath = dataHomePath + "/misc/icon_audio.png";
			}else
			if(mfile.getMimeType().equals("application/pdf")){
				filePath = dataHomePath + "/misc/icon_pdf.png";
			}else
			if(mfile.getMimeType().indexOf("mspowerpoint")!=-1){
				filePath = dataHomePath + "/misc/icon_ppt.png";
			}else
			if(mfile.getMimeType().indexOf("msexcel")!=-1){
				filePath = dataHomePath + "/misc/icon_xls.png";
			}else
			if(mfile.getMimeType().indexOf("msword")!=-1){
				filePath = dataHomePath + "/misc/icon_doc.png";
			}else
			if(mfile.getMimeType().indexOf("avatar")!=-1){
				filePath = dataHomePath + "/misc/icon_avatar.png";
			}else{
				filePath = dataHomePath + "/misc/icon_file.png";
			}
			
			File file = new File(filePath);
			if(!file.exists()){
				logger.info("File in "+filePath+" is not found.");
				return null;
			}
			@SuppressWarnings("resource")
			FileInputStream fin = new FileInputStream(file);
			
			return fin.getChannel();
		}catch(Exception e){
			throw new MediaStoreServiceException(e.getMessage());
		}
		
	}
	
	private synchronized void generateThumbnail(Path filePath) throws IOException {
		String _path = filePath.toString();
		
		Thumbnails.of(new File(_path))
				.size(thumbnailSmall, thumbnailSmall)
				.outputFormat(THUMBNAIL_FORMAT)
				.toFile(new File(_path + THUMBNAIL_SMALL_SUFFIX));
		
		Thumbnails.of(new File(_path))
				.size(thumbnailLarge, thumbnailLarge)
				.outputFormat(THUMBNAIL_FORMAT)
				.toFile(new File(_path + THUMBNAIL_LARGE_SUFFIX));
		
	}
	
	private void deleteThumbnail(MediaFile mfile) throws MediaStoreServiceException {
		
		if(mfile.getMimeType().startsWith("image")){
			Path path_s = getThumbnailPath(mfile, THUMBNAIL_SMALL_SUFFIX+'.'+THUMBNAIL_FORMAT);
			Path path_l = getThumbnailPath(mfile, THUMBNAIL_LARGE_SUFFIX+'.'+THUMBNAIL_FORMAT);
			
			try{

				Files.deleteIfExists(path_s);
				Files.deleteIfExists(path_l);
				
			}catch(IOException e){
				if(Files.exists(path_s)) {
					this.moveToTrash(path_s);
				}
				if(Files.exists(path_l)) {
					this.moveToTrash(path_l);
				}
				logger.warn("Failed to remove file "+e.getMessage());
			}
			
		}
		
	}
	
	private synchronized Path getThumbnailPath(MediaFile mfile, String suffix){
		return Paths.get(dataHomePath, mfile.getLogicalPath(), mfile.getUuid() + suffix);
	}
	
	private synchronized void moveToTrash(Path filePath) throws MediaStoreServiceException{
		//move file to trash
		Path trashPath = Paths.get(dataHomePath, FilePathManager.getInstance().getTrashPath());
		try{
			Files.move(filePath, trashPath, StandardCopyOption.ATOMIC_MOVE);
		}catch(IOException ioe){
			throw new MediaStoreServiceException("Failed to remove file "+filePath);
		}
	}

	public String getDataHomePath() {
		return dataHomePath;
	}

	public void setDataHomePath(String dataHomePath) {
		this.dataHomePath = dataHomePath;
	}

	public int getThumbnailSmall() {
		return thumbnailSmall;
	}

	public void setThumbnailSmall(int thumbnailSmall) {
		this.thumbnailSmall = thumbnailSmall;
	}

	public int getThumbnailLarge() {
		return thumbnailLarge;
	}

	public void setThumbnailLarge(int thumbnailLarge) {
		this.thumbnailLarge = thumbnailLarge;
	}


}
