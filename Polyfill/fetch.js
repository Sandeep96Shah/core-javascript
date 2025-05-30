if (!window.fetch) {
    window.fetch = function (url, options = {}) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(options.method || 'GET', url, true);
  
        // Set headers
        if (options.headers) {
          Object.entries(options.headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }
  
        xhr.onload = () => {
          const response = {
            ok: xhr.status >= 200 && xhr.status < 300,
            status: xhr.status,
            statusText: xhr.statusText,
            url: xhr.responseURL,
            text: () => Promise.resolve(xhr.responseText),
            json: () => Promise.resolve(JSON.parse(xhr.responseText)),
          };
          resolve(response);
        };
  
        xhr.onerror = () => {
          reject(new TypeError('Network request failed'));
        };
  
        xhr.ontimeout = () => {
          reject(new TypeError('Request timeout'));
        };
  
        xhr.send(options.body || null);
      });
    };
  }
  