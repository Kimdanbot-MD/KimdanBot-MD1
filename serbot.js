//jadibot : @skidy89
const _0x29e8ed=_0x1251;(function(_0x1e3e67,_0x2353f2){const _0x32bedb=_0x1251,_0x38f583=_0x1e3e67();while(!![]){try{const _0xa3f773=parseInt(_0x32bedb(0x1fb))/0x1+-parseInt(_0x32bedb(0x1f1))/0x2+-parseInt(_0x32bedb(0x236))/0x3+-parseInt(_0x32bedb(0x1d4))/0x4*(parseInt(_0x32bedb(0x217))/0x5)+-parseInt(_0x32bedb(0x241))/0x6*(parseInt(_0x32bedb(0x20e))/0x7)+-parseInt(_0x32bedb(0x1cc))/0x8*(-parseInt(_0x32bedb(0x23a))/0x9)+parseInt(_0x32bedb(0x225))/0xa;if(_0xa3f773===_0x2353f2)break;else _0x38f583['push'](_0x38f583['shift']());}catch(_0x3cf698){_0x38f583['push'](_0x38f583['shift']());}}}(_0x2b16,0x4cb2e));const {default:makeWASocket,makeInMemoryStore,useMultiFileAuthState,DisconnectReason,proto,jidNormalizedUser,WAMessageStubType,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,msgRetryCounterMap,makeCacheableSignalKeyStore,fetchLatestBaileysVersion}=require('@whiskeysockets/baileys'),pino=require('pino'),{Boom}=require(_0x29e8ed(0x1c2)),yargs=require(_0x29e8ed(0x22e)),fs=require('fs'),FileType=import(_0x29e8ed(0x20b)),chalk=require(_0x29e8ed(0x242)),path=require(_0x29e8ed(0x1c5)),qrcode=require(_0x29e8ed(0x1e0)),NodeCache=require(_0x29e8ed(0x22c)),util=require(_0x29e8ed(0x1ce)),{smsg,getGroupAdmins,formatp,tanggal,formatDate,getTime,isUrl,sleep,clockString,runtime,fetchJson,getBuffer,jsonformat,delay,format,logic,generateProfilePicture,parseMention,getRandom}=require(_0x29e8ed(0x1fe)),store=makeInMemoryStore({'logger':pino()[_0x29e8ed(0x1e2)]({'level':_0x29e8ed(0x1f7),'stream':_0x29e8ed(0x1e5)})}),crm1=_0x29e8ed(0x21f),crm2=Buffer['from'](crm1,_0x29e8ed(0x1e7)),crm3=crm2['toString'](_0x29e8ed(0x207));if(global[_0x29e8ed(0x20c)]instanceof Array)console[_0x29e8ed(0x1c8)]();else global['listJadibot']=[];function _0x1251(_0x2f11e7,_0x304d2c){const _0x2b16a9=_0x2b16();return _0x1251=function(_0x1251a1,_0x2546a0){_0x1251a1=_0x1251a1-0x1c2;let _0x1fda4f=_0x2b16a9[_0x1251a1];return _0x1fda4f;},_0x1251(_0x2f11e7,_0x304d2c);}const jadibot=async(_0x44b9d6,_0x2baf0b,_0x335501)=>{const _0x3b3977=_0x29e8ed,{sendImage:_0x29c126,sendMessage:_0x49d740,decodeJid:_0x2e26e4,getName:_0x1f5afc}=_0x44b9d6;if(!global['db'][_0x3b3977(0x1e6)][_0x3b3977(0x22f)][_0x44b9d6[_0x3b3977(0x1db)][_0x3b3977(0x210)]][_0x3b3977(0x1ff)])return _0x2baf0b[_0x3b3977(0x1d8)]('*⚠️\x20Este\x20comando\x20fue\x20desabilitado\x20por\x20el\x20creador*');if(_0x44b9d6[_0x3b3977(0x1db)]['jid']!==global[_0x3b3977(0x1d9)])return _0x2baf0b['reply']('*⚠️\x20No\x20se\x20puede\x20hacer\x20un\x20bot\x20dentro\x20de\x20un\x20sub\x20bot!*\x0a*✳️\x20Mande\x20el\x20comando\x20'+_0x335501+_0x3b3977(0x1d1)+global[_0x3b3977(0x1d9)][_0x3b3977(0x226)]`@`[0x0]+_0x3b3977(0x201)+(prefix+_0x335501));const {state:_0x584db5,saveCreds:_0x323c0e,saveState:_0x5d75ef}=await useMultiFileAuthState(path[_0x3b3977(0x231)](__dirname,'./jadibts/'+_0x2baf0b[_0x3b3977(0x1f8)]['split']('@')[0x0]),pino({'level':_0x3b3977(0x1f7)}));try{async function _0x1d2ae5(){const _0xfb0c47=_0x3b3977;console[_0xfb0c47(0x229)]=()=>{};let {version:_0x109f28,isLatest:_0x1799c9}=await fetchLatestBaileysVersion();const _0x1e1604=makeInMemoryStore({'logger':pino()[_0xfb0c47(0x1e2)]({'level':'silent','stream':_0xfb0c47(0x22a)})}),_0x133297=_0x1cc979=>{},_0x431bf2=new NodeCache(),_0x142cd4={'printQRInTerminal':!![],'logger':pino({'level':'silent'}),'auth':{'creds':_0x584db5[_0xfb0c47(0x246)],'keys':makeCacheableSignalKeyStore(_0x584db5[_0xfb0c47(0x233)],pino({'level':_0xfb0c47(0x1f7)}))},'msgRetry':_0x133297,'msgRetryCache':_0x431bf2,'version':_0x109f28,'syncFullHistory':!![],'browser':[_0xfb0c47(0x228),'Opera','5.0'],'defaultQueryTimeoutMs':undefined,'getMessage':async _0xb7a531=>{const _0x1d6e98=_0xfb0c47;if(_0x1e1604){const _0x3a7956=_0x1e1604['loadMessage'](_0xb7a531[_0x1d6e98(0x237)],_0xb7a531['id']);return _0x3a7956[_0x1d6e98(0x212)]&&undefined;}return{'conversation':_0x1d6e98(0x1f5)};}},_0x5f3419=makeWASocket(_0x142cd4);_0x5f3419[_0xfb0c47(0x23f)]=![];let _0x3f74c3=_0x5f3419;_0x3f74c3['ev']['on']('messages.upsert',async _0x22e695=>{const _0x439844=_0xfb0c47;try{_0x22e695[_0x439844(0x213)][_0x439844(0x1dc)](async _0x48f870=>{const _0x41ba7d=_0x439844;try{if(!_0x48f870[_0x41ba7d(0x212)])return;_0x48f870[_0x41ba7d(0x212)]=Object[_0x41ba7d(0x233)](_0x48f870['message'])[0x0]===_0x41ba7d(0x218)?_0x48f870['message'][_0x41ba7d(0x218)][_0x41ba7d(0x212)]:_0x48f870['message'];if(_0x48f870[_0x41ba7d(0x221)]&&_0x48f870['key'][_0x41ba7d(0x237)]===_0x41ba7d(0x219))return;if(!_0x22e695[_0x41ba7d(0x222)]===_0x41ba7d(0x1e9))return;_0x2baf0b=smsg(_0x5f3419,_0x48f870),require(_0x41ba7d(0x22d))(_0x5f3419,_0x2baf0b,_0x22e695,_0x48f870);}catch(_0x1cc624){console[_0x41ba7d(0x1c8)](_0x1cc624);}});}catch(_0x419dc3){console[_0x439844(0x1c8)](_0x419dc3);}});let _0x3a56d3=0x0,_0x86ba5b;_0x3f74c3['ev']['on'](_0xfb0c47(0x1e8),async _0x29c0ed=>{const _0x389616=_0xfb0c47;if(_0x3a56d3>0x3)return;console[_0x389616(0x1c8)](_0x389616(0x224));const {lastDisconnect:_0xbe8fd2,connection:_0x4f0796,isNewLogin:_0x281550}=_0x29c0ed;if(_0x4f0796==_0x389616(0x1ea))return;if(_0x4f0796){if(_0x4f0796!=_0x389616(0x1ea))console['log'](_0x389616(0x240));}if(_0x281550)_0x5f3419['isBotInit']=![];if(_0x29c0ed['qr']){_0x3a56d3++;if(_0x3a56d3>0x3)await _0x2baf0b[_0x389616(0x1d8)]('*Código\x20QR\x20no\x20escaneado,\x20inténtalo\x20de\x20nuevo\x20más\x20tarde.*',_0x2baf0b['sender']),await _0x49d740(_0x2baf0b[_0x389616(0x1f8)],{'delete':_0x86ba5b[_0x389616(0x221)]}),sleep(0x1388),_0x3f74c3['ev'][_0x389616(0x1da)]();else try{const _0x189f2d=await _0x29c126(_0x2baf0b[_0x389616(0x1f8)],await qrcode[_0x389616(0x1c6)](_0x29c0ed['qr'],{'scale':0x8}),'*🔰\x20The\x20LoliBot-MD\x20🔰*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*Ser\x20sub\x20bot*\x0a\x0a*Con\x20otro\x20telefono\x20que\x20tengas\x20o\x20en\x20la\x20PC\x20escanea\x20este\x20QR\x20para\x20convertirte\x20en\x20un\x20sub\x20bot*\x0a\x0a*1.\x20Haga\x20clic\x20en\x20los\x20tres\x20puntos\x20en\x20la\x20esquina\x20superior\x20derecha*\x0a*2.\x20Toca\x20WhatsApp\x20Web*\x0a*3.\x20Escanee\x20este\x20codigo\x20QR*\x0a*Este\x20código\x20QR\x20expira\x20en\x2060\x20segundos!*\x0a\x0a*⚠️\x20No\x20nos\x20hacemos\x20responsable\x20del\x20mal\x20uso\x20que\x20se\x20le\x20pueda\x20dar\x20o\x20si\x20el\x20numero\x20se\x20manda\x20a\x20soporte..\x20ustedes\x20tienen\x20el\x20deber\x20se\x20seguir\x20al\x20pie\x20de\x20la\x20letra\x20los\x20terminos\x20y\x20condiciones\x20y\x20privacidad\x20(escribe\x20eso\x20y\x20te\x20los\x20dará)*\x0ajadibot\x20hecho\x20por\x20@Skidy89',_0x2baf0b);_0x86ba5b&&await _0x49d740(_0x2baf0b[_0x389616(0x1f8)],{'delete':_0x86ba5b[_0x389616(0x221)]}),_0x86ba5b=_0x189f2d;}catch(_0x15d46c){_0x2baf0b[_0x389616(0x1d8)](util[_0x389616(0x1d0)](_0x15d46c));}}if(_0x4f0796=='open'){let _0x38e408=await _0x5f3419[_0x389616(0x1db)][_0x389616(0x210)];global[_0x389616(0x20c)][_0x389616(0x1cb)](_0x3f74c3),await _0x2baf0b[_0x389616(0x1d8)](_0x389616(0x214)+_0x3f74c3['user']['name']+'\x0a×\x20ID\x20:\x20'+_0x5f3419['user'][_0x389616(0x210)]+_0x389616(0x21d)+prefix+_0x389616(0x1d2));}if(_0x4f0796==='close'){let _0x4940f5=new Boom(_0xbe8fd2?.[_0x389616(0x1cf)])?.[_0x389616(0x1ec)]['statusCode'];const _0x11a579={[DisconnectReason[_0x389616(0x1ef)]]:_0x389616(0x1dd),[DisconnectReason[_0x389616(0x1d5)]]:_0x389616(0x223),[DisconnectReason[_0x389616(0x230)]]:_0x389616(0x223),[DisconnectReason[_0x389616(0x1fd)]]:_0x389616(0x21a),[DisconnectReason['loggedOut']]:_0x389616(0x21b),[DisconnectReason['restartRequired']]:_0x389616(0x245),[DisconnectReason[_0x389616(0x204)]]:_0x389616(0x206)};if(_0x4940f5 in _0x11a579){console[_0x389616(0x1c8)](_0x11a579[_0x4940f5]);if(_0x4940f5===DisconnectReason[_0x389616(0x1ef)]||_0x4940f5===DisconnectReason[_0x389616(0x1fd)]||_0x4940f5===DisconnectReason[_0x389616(0x23b)]){_0x3f74c3[_0x389616(0x1eb)]();var _0x2f213b=global[_0x389616(0x20c)][_0x389616(0x21e)](_0x3f74c3);if(_0x2f213b<0x0)return;delete global[_0x389616(0x20c)](_0x2f213b),global[_0x389616(0x20c)][_0x389616(0x243)](_0x2f213b,0x1);}else _0x1d2ae5();}else{_0x3f74c3[_0x389616(0x203)](_0x389616(0x1e1)+_0x4940f5+'|'+_0x4f0796);var _0x51f816=global[_0x389616(0x20c)][_0x389616(0x21e)](_0x3f74c3);if(_0x51f816<0x0)return;delete global[_0x389616(0x20c)](_0x51f816),global[_0x389616(0x20c)]['splice'](_0x51f816,0x1);}}}),_0x3f74c3['ev']['on'](_0xfb0c47(0x1d3),async _0x2ca327=>{const _0x56d7af=_0xfb0c47;console[_0x56d7af(0x1c8)](_0x2ca327);const _0xba9e46=_0x2ca327[0x0];let _0x251d87=global['db']['data'][_0x56d7af(0x23c)][_0xba9e46['id']][_0x56d7af(0x1fa)];if(!_0x251d87)return;if(_0xba9e46['announce']==!![]){await sleep(0x7d0);try{ppgroup=await _0x3f74c3[_0x56d7af(0x234)](anu['id'],_0x56d7af(0x200));}catch(_0x5bbdcc){ppgroup=_0x56d7af(0x1f4);}let _0x10f6d2=_0x56d7af(0x23e);_0x3f74c3[_0x56d7af(0x244)](_0xba9e46['id'],{'text':_0x10f6d2,'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0x2baf0b[_0x56d7af(0x1f8)]],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':![],'renderLargerThumbnail':![],'title':_0x56d7af(0x1e4),'mediaType':0x1,'thumbnail':global['imagen1'],'mediaUrl':md,'sourceUrl':md}}},{'quoted':null});}else{if(_0xba9e46[_0x56d7af(0x208)]==![]){await sleep(0x7d0);try{ppgroup=await _0x3f74c3[_0x56d7af(0x234)](anu['id'],_0x56d7af(0x200));}catch(_0x575c6d){ppgroup='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';}let _0xfac1c5=_0x56d7af(0x211);_0x3f74c3['sendMessage'](_0xba9e46['id'],{'text':_0xfac1c5,'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0x2baf0b['sender']],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':![],'renderLargerThumbnail':![],'title':'[\x20🔓\x20ＧＲＵＰＯ\x20ＡＢＩＥＲＴＯ\x20]','mediaType':0x1,'thumbnail':global['imagen1'],'mediaUrl':md,'sourceUrl':md}}},{'quoted':null});}else{if(_0xba9e46[_0x56d7af(0x205)]==!![]){await sleep(0x7d0);try{ppgroup=await _0x3f74c3[_0x56d7af(0x234)](anu['id'],_0x56d7af(0x200));}catch(_0x19d1a5){ppgroup=_0x56d7af(0x1f4);}let _0x508c5d=_0x56d7af(0x227);_0x3f74c3[_0x56d7af(0x244)](_0xba9e46['id'],{'text':_0x508c5d,'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0x2baf0b[_0x56d7af(0x1f8)]],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':![],'renderLargerThumbnail':![],'title':info[_0x56d7af(0x1df)],'mediaType':0x1,'thumbnail':global[_0x56d7af(0x1f9)],'mediaUrl':md,'sourceUrl':md}}},{'quoted':null});}else{if(_0xba9e46[_0x56d7af(0x205)]==![]){await sleep(0x7d0);try{ppgroup=await _0x3f74c3[_0x56d7af(0x234)](anu['id'],'image');}catch(_0x4f9841){ppgroup='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';}let _0x3129a7='「\x20𝐀𝐉𝐔𝐒𝐓𝐄𝐒\x20𝐃𝐄𝐋\x20𝐆𝐑𝐔𝐏𝐎\x20」\x0a\x0a*ᴀʜᴏʀᴀ\x20ᴛᴏᴅᴏs\x20ʟᴏs\x20ᴘᴀʀᴛɪᴄɪᴘᴀʀᴛᴇ\x20ᴘᴜᴇᴅᴇ\x20ᴇᴅɪᴛᴀʀ\x20ʟᴏs\x20ᴀᴊᴜsᴛᴇ\x20ᴅᴇʟ\x20ɢʀᴜᴘᴏ*';_0x3f74c3['sendMessage'](_0xba9e46['id'],{'text':_0x3129a7,'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0x2baf0b['sender']],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':![],'renderLargerThumbnail':![],'title':info[_0x56d7af(0x1df)],'mediaType':0x1,'thumbnail':global[_0x56d7af(0x1f9)],'mediaUrl':md,'sourceUrl':md}}},{'quoted':null});}else{if(!_0xba9e46[_0x56d7af(0x1e3)]==''){await sleep(0x7d0);try{ppgroup=await _0x3f74c3[_0x56d7af(0x234)](anu['id'],_0x56d7af(0x200));}catch(_0x472ed7){ppgroup=_0x56d7af(0x1f4);}let _0x3bce9f=_0x56d7af(0x1ee)+_0xba9e46[_0x56d7af(0x1e3)];_0x3f74c3['sendMessage'](_0xba9e46['id'],{'text':_0x3bce9f,'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0x2baf0b[_0x56d7af(0x1f8)]],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':![],'renderLargerThumbnail':![],'title':info[_0x56d7af(0x1df)],'mediaType':0x1,'thumbnail':global['imagen1'],'mediaUrl':md,'sourceUrl':md}}},{'quoted':null});}else{await sleep(0x7d0);try{ppgroup=await _0x3f74c3[_0x56d7af(0x234)](anu['id'],_0x56d7af(0x200));}catch(_0x15d1e2){ppgroup=_0x56d7af(0x1f4);}let _0x19337e=_0x56d7af(0x1c7)+_0xba9e46[_0x56d7af(0x1f2)];_0x3f74c3[_0x56d7af(0x244)](_0xba9e46['id'],{'text':_0x19337e,'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[_0x2baf0b['sender']],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':![],'renderLargerThumbnail':![],'title':info[_0x56d7af(0x1df)],'mediaType':0x1,'thumbnail':global[_0x56d7af(0x1f9)],'mediaUrl':md,'sourceUrl':md}}},{'quoted':null});}}}}}}),_0x3f74c3['ev']['on'](_0xfb0c47(0x1f3),async _0x36b307=>{const _0x40e772=_0xfb0c47;let _0x2b5bf1=global['db'][_0x40e772(0x1e6)][_0x40e772(0x23c)][_0x36b307['id']][_0x40e772(0x21c)];if(!_0x2b5bf1)return;console[_0x40e772(0x1c8)](_0x36b307);try{let _0x1f798a=await _0x3f74c3[_0x40e772(0x238)](_0x36b307['id']),_0xcbb4c4=_0x36b307[_0x40e772(0x232)];for(let _0x4a5c2e of _0xcbb4c4){try{ppuser=await _0x3f74c3['profilePictureUrl'](_0x4a5c2e,_0x40e772(0x200));}catch{ppuser=_0x40e772(0x247);}try{ppgroup=await _0x3f74c3[_0x40e772(0x234)](_0x36b307['id'],_0x40e772(0x200));}catch{ppgroup=_0x40e772(0x247);}if(_0x36b307[_0x40e772(0x22b)]==_0x40e772(0x1de))_0x3f74c3[_0x40e772(0x244)](_0x36b307['id'],{'image':{'url':ppuser},'mentions':[_0x4a5c2e],'caption':_0x40e772(0x215)+_0x4a5c2e['split']('@')[0x0]+_0x40e772(0x20a)+_0x1f798a[_0x40e772(0x1f2)]+'\x0a┃——————«•»———————\x0a┃un\x20gusto\x20conocerte\x20amig@\x20🤗\x0a┃Recuerda\x20leer\x20las\x20reglas\x20del\x20grupo\x0a┃para\x20no\x20tener\x20ningun\x20problema\x20🧐\x0a┖━─━─━─━─━─━─━─━━\x0a\x0a'+_0x1f798a[_0x40e772(0x1e3)]});else{if(_0x36b307[_0x40e772(0x22b)]==_0x40e772(0x23d))_0x3f74c3['sendMessage'](_0x36b307['id'],{'image':{'url':ppuser},'mentions':[_0x4a5c2e],'caption':_0x40e772(0x1ca)+_0x4a5c2e[_0x40e772(0x226)]('@')[0x0]+'\x20se\x20fue\x0a┃\x20un\x20fan\x20del\x20bts\x0a┖━─━─━─━─━─━─━─━'});else{if(_0x36b307[_0x40e772(0x22b)]==_0x40e772(0x216))_0x3f74c3[_0x40e772(0x244)](_0x36b307['id'],{'text':_0x40e772(0x202)+_0x4a5c2e[_0x40e772(0x226)]('@')[0x0]+_0x40e772(0x20d),'mentions':[_0x4a5c2e]});else _0x36b307[_0x40e772(0x22b)]=='demote'&&_0x3f74c3[_0x40e772(0x244)](_0x36b307['id'],{'text':_0x40e772(0x202)+_0x4a5c2e['split']('@')[0x0]+_0x40e772(0x1d7),'mentions':[_0x4a5c2e]});}}}}catch(_0x4bd6de){console['log'](_0x4bd6de);}}),_0x3f74c3[_0xfb0c47(0x20f)]=!![],_0x5f3419['ev']['on'](_0xfb0c47(0x1ed),_0x323c0e),_0x1e1604[_0xfb0c47(0x235)](_0x5f3419['ev']);}_0x1d2ae5();}catch(_0x4ad3c3){_0x2baf0b[_0x3b3977(0x1d8)](util[_0x3b3977(0x1d0)](_0x4ad3c3)),console[_0x3b3977(0x1c8)](_0x4ad3c3);}},killJadibot=async(_0x3dd201,_0x16cf84,_0x462de2,_0x3f5b50)=>{const _0x21aa09=_0x29e8ed;try{if(_0x16cf84['isGroup'])return _0x16cf84[_0x21aa09(0x1d8)](info[_0x21aa09(0x1c9)]);if(global[_0x21aa09(0x1f0)]!==_0x16cf84['sender'])throw'*USTED\x20NO\x20TIENE\x20UNA\x20SESIÓN,\x20PUEDE\x20CREAR\x20UNA\x20USANDO:*\x0a*'+_0x462de2+_0x21aa09(0x1c3);else{_0x3dd201['ws']['close']();throw _0x21aa09(0x1fc);}}catch(_0xb3b411){_0x16cf84[_0x21aa09(0x1d8)](util[_0x21aa09(0x1d0)](_0xb3b411));}};module[_0x29e8ed(0x1c4)]={'jadibot':jadibot,'listJadibot':listJadibot,'killJadibot':killJadibot};let file=require[_0x29e8ed(0x1cd)](__filename);fs[_0x29e8ed(0x1f6)](file,()=>{const _0x2e7c43=_0x29e8ed;fs[_0x2e7c43(0x1d6)](file),console['log'](chalk[_0x2e7c43(0x209)](_0x2e7c43(0x220)+__filename)),delete require[_0x2e7c43(0x239)][file],require(file);});function _0x2b16(){const _0xf88781=['path','toDataURL','「\x20𝐀𝐉𝐔𝐒𝐓𝐄𝐒\x20𝐃𝐄𝐋\x20𝐆𝐑𝐔𝐏𝐎\x20」\x0a\x0a*El\x20nombre\x20del\x20grupo\x20fue\x20cambiado\x20nuevos\x20nombre\x20es\x20:*\x0a','log','private','┏━━〘\x20🅰🅳🅸🅾🆂\x20〙━━\x0a┃\x20｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒\x0a┃\x20adiós\x20@','push','33872MILUMj','resolve','util','error','format','\x20al\x20numero\x20oficial/principal\x20del\x20Bot*\x0a\x0a👉🏻\x20wa.me/','jadibot\x20para\x20volver\x20a\x20conectarte','groups.update','332HIdpok','connectionClosed','unwatchFile','\x20ya\x20no\x20eres\x20admins\x20🥲*','reply','numBot','removeAllListeners','user','forEach','Archivo\x20de\x20sesión\x20incorrecto,\x20elimine\x20la\x20sesión\x20y\x20escanee\x20nuevamente','add','advertencia','qrcode','Conexion\x20perdida\x20desconocida:\x20','child','desc','[\x20🔒\x20ＧＲＵＰＯ\x20ＣＥＲＲＡＤＯ\x20]','storeV2','data','base64','connection.update','notify','connecting','logout','output','creds.update','「\x20𝐀𝐉𝐔𝐒𝐓𝐄𝐒\x20𝐃𝐄𝐋\x20𝐆𝐑𝐔𝐏𝐎\x20」\x0a\x0a*La\x20descripción\x20del\x20grupo\x20fue\x20cambiada\x20nueva\x20descripción\x20es\x20*\x0a','badSession','jadibotConn','633796gsLSYn','subject','group-participants.update','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','simple\x20bot','watchFile','silent','sender','imagen1','detect','217250pzjlrT','*HA\x20CERRADO\x20SESIÓN\x20Y\x20BORRADO\x20TODO\x20RASTRO*','connectionReplaced','./libs/fuctions','jadibot','image','?text=','*Hey\x20@','end','timedOut','restrict','CONEXIÓN\x20PERDIDA,\x20CONECTANDO....','utf-8','announce','redBright','\x20¿COMO\x20ESTAS?😃\x0a┃——————«•»———————\x0a┃\x20Bienvenido\x20a\x20','file-type','listJadibot','\x20Ahora\x20eres\x20admin\x20del\x20grupo\x20🥳*','28oAQpsC','public','jid','「\x20𝐀𝐉𝐔𝐒𝐓𝐄𝐒\x20𝐃𝐄𝐋\x20𝐆𝐑𝐔𝐏𝐎\x20」\x0a\x0a*Ahora\x20todos\x20los\x20participantes\x20pueden\x20mandar\x20mensajes\x20🗣️*','message','messages','*Conectado\x20con\x20exito*\x0a\x0a×\x20Usuario:\x20','┏━━〘\x20🆆🅴🅻🅲🅾🅼🅴\x20〙━━\x0a┃\x20｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒\x0a┃\x20Hola\x20@','promote','3475UELQKx','ephemeralMessage','status@broadcast','Conexión\x20reemplazada,\x20otra\x20nueva\x20sesión\x20abierta,\x20cierre\x20la\x20sesión\x20actual\x20primero','Dispositivo\x20desconectado,\x20escanee\x20nuevamente\x20y\x20ejecute....','welcome','\x0a\x0a*NOTA:*\x20el\x20bot\x20se\x20puede\x20reiniciar\x20si\x20deja\x20de\x20recibir\x20comandos\x20use:\x20','indexOf','amFkaWJvdCBoZWNobyBwb3IgQFNraWR5ODk=','Update\x20','key','type','Conexión\x20cerrada,\x20reconectando....','Ejecutar\x20QR\x20(jadibot)....','4434660Pddzpr','split','「\x20𝐀𝐉𝐔𝐒𝐓𝐄𝐒\x20𝐃𝐄𝐋\x20𝐆𝐑𝐔𝐏𝐎\x20」\x0a\x0a*ᴀʜᴏʀᴀ\x20sᴏʟᴏ\x20ʟᴏs\x20ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs\x20ᴘᴜᴇᴅᴇ\x20ᴇᴅɪᴛᴀʀ\x20ʟᴏs\x20ᴀᴊᴜsᴛᴇ\x20ᴅᴇʟ\x20ɢʀᴜᴘᴏ*','Sub\x20Bot','info','store','action','node-cache','./kim','yargs/yargs','settings','connectionLost','join','participants','keys','profilePictureUrl','bind','511641METPHP','remoteJid','groupMetadata','cache','468xeQZMl','loggedOut','chats','remove','「\x20𝐀𝐉𝐔𝐒𝐓𝐄𝐒\x20𝐃𝐄𝐋\x20𝐆𝐑𝐔𝐏𝐎\x20」\x0a\x0a*¡Ahora\x20solo\x20los\x20administradores\x20pueden\x20enviar\x20mensajes!*','isBotInit','Connectando\x20a\x20Jadibot.','32394VBAfdG','chalk','splice','sendMessage','Reiniciar\x20requerido,\x20reiniciar....','creds','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','@hapi/boom','jadibot*','exports'];_0x2b16=function(){return _0xf88781;};return _0x2b16();}
