const devAPIURL = "http://7f8a1760.ngrok.io";
const prodAPIURLs= "mon-site.com/api";

let config = {}
if(process.env.NODE_ENV !== 'production'){
  config = {
    apiURL: devAPIURL
  }
}else {
  config = {
    apiURL: prodAPIURLs
  }
}
export default config;