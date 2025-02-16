const fs = require('fs') 
const Crypto = require("crypto") 
const ff = require('fluent-ffmpeg') 
const webp = require("node-webpmux") 
const path = require("path") 

const tempFolder = path.join(__dirname, "..", "temp");

exports.fetchBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url,
			headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}}

async function imageToWebp(media) { 
const tmpFileOut = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
const tmpFileIn = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`) 
    fs.writeFileSync(tmpFileIn, media) 
    await new Promise((resolve, reject) => { 
        ff(tmpFileIn) 
            .on("error", reject) 
            .on("end", () => resolve(true)) 
            .addOutputOptions([ 
                "-vcodec", 
                "libwebp", 
                "-vf", 
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" 
            ]) 
            .toFormat("webp") 
            .save(tmpFileOut) 
    }) 
    const buff = fs.readFileSync(tmpFileOut) 
    fs.unlinkSync(tmpFileOut) 
    fs.unlinkSync(tmpFileIn) 
    return buff 
}

async function videoToWebp(media) { 
    const tmpFileOut = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
    const tmpFileIn = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`) 
    fs.writeFileSync(tmpFileIn, media) 
    await new Promise((resolve, reject) => { 
        ff(tmpFileIn) 
            .on("error", reject) 
            .on("end", () => resolve(true)) 
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
            .toFormat("webp") 
            .save(tmpFileOut) 
    }) 
    const buff = fs.readFileSync(tmpFileOut) 
    fs.unlinkSync(tmpFileOut) 
    fs.unlinkSync(tmpFileIn) 
    return buff 
}

async function writeExifImg(media, metadata) { 
    let wMedia = await imageToWebp(media) 
    const tmpFileIn = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
    const tmpFileOut = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
    fs.writeFileSync(tmpFileIn, wMedia) 
    if (metadata.packname || metadata.author) { 
        const img = new webp.Image() 
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] } 
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]) 
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8") 
        const exif = Buffer.concat([exifAttr, jsonBuff]) 
        exif.writeUIntLE(jsonBuff.length, 14, 4) 
        await img.load(tmpFileIn) 
        fs.unlinkSync(tmpFileIn) 
        img.exif = exif 
        await img.save(tmpFileOut) 
        return tmpFileOut 
    }}

async function writeExifVid(media, metadata) { 
    let wMedia = await videoToWebp(media) 
    const tmpFileIn = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
    const tmpFileOut = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
    fs.writeFileSync(tmpFileIn, wMedia) 
    if (metadata.packname || metadata.author) { 
        const img = new webp.Image() 
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] } 
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]) 
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8") 
        const exif = Buffer.concat([exifAttr, jsonBuff]) 
        exif.writeUIntLE(jsonBuff.length, 14, 4) 
        await img.load(tmpFileIn) 
        fs.unlinkSync(tmpFileIn) 
        img.exif = exif 
        await img.save(tmpFileOut) 
        return tmpFileOut 
    }}

async function writeExif(media, metadata) { 
    let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await imageToWebp(media.data) : /video/.test(media.mimetype) ? await videoToWebp(media.data) : "" 
    const tmpFileIn = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
    const tmpFileOut = path.join(tempFolder, `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`) 
    fs.writeFileSync(tmpFileIn, wMedia) 
    if (metadata.packname || metadata.author) { 
        const img = new webp.Image() 
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] } 
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]) 
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8") 
        const exif = Buffer.concat([exifAttr, jsonBuff]) 
        exif.writeUIntLE(jsonBuff.length, 14, 4) 
        await img.load(tmpFileIn) 
        fs.unlinkSync(tmpFileIn) 
        img.exif = exif 
        await img.save(tmpFileOut) 
        return tmpFileOut 
    }}

function toAudio(buffer, ext) { 
   return ffmpeg(buffer, [ 
     '-vn', 
     '-c:a', 'libopus', 
     '-b:a', '128k', 
     '-vbr', 'on', 
     '-compression_level', '10', 
   ], ext, 'opus')}

module.exports = { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, toAudio }
