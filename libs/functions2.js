const fs = require('fs');
const crypto = require("crypto");
const ffmpeg = require('fluent-ffmpeg');
const webp = require("node-webpmux");
const path = require("path");

// Dorectory temp file;
let tempFolder = path.join(__dirname, "..", "temp");

module.exports = {

       fetchBuffer: async(url) => {
    	try {
	    let fetch = require('node-fetch');
	      let buffer = await fetch(url);
	    return buffer.buffer();
       	} catch (err) {
		      throw err;
	        }
        },
        
       imageToWebp: (media) => {
    let nameWebp = crypto.randomBytes(5) + '.webp';
    return new Promise((resolve, reject) => {
        ffmpeg(media)
            .on('error', (e) => {
            fs.unlinkSync(media);
            reject(e);
        })
            .on('end', async() => {
            fs.unlinkSync(media);
            resolve(fs.readFileSync(nameWebp));
            fs.unlinkSync(nameWebp);
        })
            .addOutputOptions([
            "-vcodec",
            "libwebp",
            "-vf",
            "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
        ])
            .toFormat('webp')
            .save(nameWebp);
         });
       },

       videoToWebp: (media) => {
    let nameWebp = crypto.randomBytes(5) + '.webp';
    return new Promise((resolve, reject) => {
        ffmpeg(media)
            .on('error', (e) => {
            fs.unlinkSync(media);
            reject(e);
        })
            .on('end', () => {
            fs.unlinkSync(media);
            resolve(fs.readFileSync(nameWebp));
            fs.unlinkSync(nameWebp);
        })
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                "-loop",
                "0",
                "-ss",
                "00:00:00",
                "-t",
                "00:00:05",
                "-preset",
                "default",
                "-an",
                "-vsync",
                "0"
            ])
            .toFormat('webp')
            .save(nameWebp);
          });
       },

     writeExifImg: async(media, metadata) => { 
        let wMedia = await imageToWebp(media);
          let tmpFileIn = path.join(tempFolder, crypto.randomBytes(6) + '.webp');
          let tmpFileOut = path.join(tempFolder, crypto.randomBytes(6) + '.webp');
         fs.writeFileSync(tmpFileIn, wMedia)
         // Func;
        if (metadata.packname || metadata.author) { 
           let img = new webp.Image();
           let json = { "sticker-pack-id": 'https://github.com/DikaArdnt/Hisoka-Morou', "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata?.categories || [] };
           let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
           let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
           let exif = Buffer.concat([exifAttr, jsonBuff]);
             //Pushiled exif;
               exif.writeUIntLE(jsonBuff.length, 14, 4);
               await img.load(tmpFileIn);
               await img.save(tmpFileOut);
               fs.unlinkSync(tmpFileIn);
               img.exif = exif;
            return tmpFileOut;
            };
        },

       writeExifVid: async(media, metadata) => { 
         let wMedia = await videoToWebp(media);
         let tmpFileIn = path.join(tempFolder, crypto.randomBytes(6) + '.webp');
         let tmpFileOut = path.join(tempFolder, crypto.randomBytes(6)  + '.webp');
          fs.writeFileSync(tmpFileIn, wMedia);
           // Func;
          if (metadata.packname || metadata.author) { 
              let img = new webp.Image();
              let json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata?.categories || [] };
              let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
              let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
              let exif = Buffer.concat([exifAttr, jsonBuff]);
                //Pushiled exif;
                 exif.writeUIntLE(jsonBuff.length, 14, 4);
                 await img.load(tmpFileIn);
                 fs.unlinkSync(tmpFileIn);
                 img.exif = exif;
                 await img.save(tmpFileOut);
               return tmpFileOut;
                };
            },

         writeExif: (media, metadata) => { 
           let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await imageToWebp(media.data) : /video/.test(media.mimetype) ? await videoToWebp(media.data) : ""            let tmpFileIn = path.join(tempFolder, crypto.randomBytes(5) + '.webp');
           let tmpFileOut = path.join(tempFolder, crypto.randomBytes(5) + '.webp');
            fs.writeFileSync(tmpFileIn, wMedia);
              // Func;
             if (metadata.packname || metadata.author) { 
               let img = new webp.Image();
               let json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata?.categories || [] };
               let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
               let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
               let exif = Buffer.concat([exifAttr, jsonBuff]);
               //Pushiled Exif;
                 exif.writeUIntLE(jsonBuff.length, 14, 4);
                 await img.load(tmpFileIn);
                 fs.unlinkSync(tmpFileIn);
                 img.exif = exif;
                 await img.save(tmpFileOut);
              return tmpFileOut 
            };
        },

       toAudio: (buffer, ext) =>
          ffmpeg(buffer, ['-vn', '-c:a', 'libopus', '-b:a', '128k', '-vbr', 'on', '-compression_level', '10'], ext, 'opus'); 
}
