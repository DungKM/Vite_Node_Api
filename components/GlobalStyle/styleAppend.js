export const styleAppend = () => {
  return `
    var cssLink = document.createElement("link");
    var script = document.createElement("script");
// Đặt thuộc tính cho phần tử link
    cssLink.setAttribute("rel", "stylesheet");
    cssLink.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    );
    cssLink.setAttribute(
      "integrity",
      "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    );
    cssLink.setAttribute("crossorigin", "anonymous");
  
// Chèn phần tử link vào thẻ head
    document.head.appendChild(cssLink);

// Chèn Link JS
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
        script.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
    `;
};
