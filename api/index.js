  export default function handler(req, res) {                                                                                                                                              
    const ua = req.headers['user-agent'] || '';                                                                                                                                            
    const ip = req.headers['x-forwarded-for'] || '';                                                                                                                                       
                                                                                                                                                                                           
    const botPatterns = [
      'facebookexternalhit', 'Facebot', 'FacebookBot',                                                                                                                                     
      'AdsBot', 'Googlebot', 'bingbot', 'Twitterbot',                                                                                                                                      
      'LinkedInBot', 'Slackbot', 'WhatsApp', 'TelegramBot',                                                                                                                                
      'crawler', 'spider', 'bot', 'headless', 'phantom'                                                                                                                                    
    ];                                                                                                                                                                                     
                                                                                                                                                                                           
    const isBot = botPatterns.some(p => ua.toLowerCase().includes(p.toLowerCase()));                                                                                                       
                                                                                                                                                                                           
    // IPs conhecidos do Meta                                                                                                                                                            
    const metaIpRanges = ['66.220.', '69.63.', '69.171.', '173.252.', '31.13.'];                                                                                                           
    const isMeta = metaIpRanges.some(r => ip.includes(r));                                                                                                                               
                                                                                                                                                                                           
    if (isBot || isMeta) {                                                                                                                                                                 
      res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });                                                                                                     
      res.end();                                                                                                                                                                           
      return;                                                                                                                                                                              
    }        
                                                                                                                                                                                           
    // Usuário real → troca pela URL da casa                                                                                                                                             
    res.writeHead(302, { Location: 'https://URL_DA_CASA_AQUI' });                                                                                                                          
    res.end();
  }
