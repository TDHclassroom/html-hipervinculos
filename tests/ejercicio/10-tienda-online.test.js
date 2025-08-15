const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 12: Tienda Online - Estructura Completa', () => {
    const basePath = path.join(__dirname, '../../docs/tienda-online');
    
    // Tests de estructura de carpetas
    describe('Estructura de Carpetas', () => {
        test('debe existir la carpeta docs/tienda-online/', () => {
            expect(fs.existsSync(basePath)).toBe(true);
            expect(fs.statSync(basePath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta pages/', () => {
            const pagesPath = path.join(basePath, 'pages');
            expect(fs.existsSync(pagesPath)).toBe(true);
            expect(fs.statSync(pagesPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta assets/', () => {
            const assetsPath = path.join(basePath, 'assets');
            expect(fs.existsSync(assetsPath)).toBe(true);
            expect(fs.statSync(assetsPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta assets/images/', () => {
            const imagesPath = path.join(basePath, 'assets/images');
            expect(fs.existsSync(imagesPath)).toBe(true);
            expect(fs.statSync(imagesPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta assets/images/productos/', () => {
            const productosPath = path.join(basePath, 'assets/images/productos');
            expect(fs.existsSync(productosPath)).toBe(true);
            expect(fs.statSync(productosPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta assets/images/logos/', () => {
            const logosPath = path.join(basePath, 'assets/images/logos');
            expect(fs.existsSync(logosPath)).toBe(true);
            expect(fs.statSync(logosPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta assets/images/banners/', () => {
            const bannersPath = path.join(basePath, 'assets/images/banners');
            expect(fs.existsSync(bannersPath)).toBe(true);
            expect(fs.statSync(bannersPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta assets/css/', () => {
            const cssPath = path.join(basePath, 'assets/css');
            expect(fs.existsSync(cssPath)).toBe(true);
            expect(fs.statSync(cssPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta assets/js/', () => {
            const jsPath = path.join(basePath, 'assets/js');
            expect(fs.existsSync(jsPath)).toBe(true);
            expect(fs.statSync(jsPath).isDirectory()).toBe(true);
        });

        test('debe existir la carpeta data/', () => {
            const dataPath = path.join(basePath, 'data');
            expect(fs.existsSync(dataPath)).toBe(true);
            expect(fs.statSync(dataPath).isDirectory()).toBe(true);
        });
    });

    // Tests de archivos HTML
    describe('Archivos HTML', () => {
        test('debe existir index.html en la raíz', () => {
            const indexPath = path.join(basePath, 'index.html');
            expect(fs.existsSync(indexPath)).toBe(true);
            expect(fs.statSync(indexPath).isFile()).toBe(true);
        });

        test('debe existir productos.html en pages/', () => {
            const productosPath = path.join(basePath, 'pages/productos.html');
            expect(fs.existsSync(productosPath)).toBe(true);
            expect(fs.statSync(productosPath).isFile()).toBe(true);
        });

        test('debe existir contacto.html en pages/', () => {
            const contactoPath = path.join(basePath, 'pages/contacto.html');
            expect(fs.existsSync(contactoPath)).toBe(true);
            expect(fs.statSync(contactoPath).isFile()).toBe(true);
        });

        test('debe existir acerca-de.html en pages/', () => {
            const acercaPath = path.join(basePath, 'pages/acerca-de.html');
            expect(fs.existsSync(acercaPath)).toBe(true);
            expect(fs.statSync(acercaPath).isFile()).toBe(true);
        });

        test('debe existir carrito.html en pages/', () => {
            const carritoPath = path.join(basePath, 'pages/carrito.html');
            expect(fs.existsSync(carritoPath)).toBe(true);
            expect(fs.statSync(carritoPath).isFile()).toBe(true);
        });
    });

    // Tests de archivos de recursos
    describe('Archivos de Recursos', () => {
        test('debe existir styles.css en assets/css/', () => {
            const cssPath = path.join(basePath, 'assets/css/styles.css');
            expect(fs.existsSync(cssPath)).toBe(true);
            expect(fs.statSync(cssPath).isFile()).toBe(true);
        });

        test('debe existir main.js en assets/js/', () => {
            const jsPath = path.join(basePath, 'assets/js/main.js');
            expect(fs.existsSync(jsPath)).toBe(true);
            expect(fs.statSync(jsPath).isFile()).toBe(true);
        });

        test('debe existir productos.json en data/', () => {
            const dataPath = path.join(basePath, 'data/productos.json');
            expect(fs.existsSync(dataPath)).toBe(true);
            expect(fs.statSync(dataPath).isFile()).toBe(true);
        });
    });

    // Tests de contenido HTML
    describe('Contenido HTML - index.html', () => {
        let indexContent;
        let dom;
        let document;

        beforeAll(() => {
            const indexPath = path.join(basePath, 'index.html');
            if (fs.existsSync(indexPath)) {
                indexContent = fs.readFileSync(indexPath, 'utf8');
                dom = new JSDOM(indexContent);
                document = dom.window.document;
            }
        });

        test('index.html debe tener estructura HTML básica', () => {
            expect(indexContent).toMatch(/<!DOCTYPE\s+html>/i);
            expect(indexContent).toMatch(/<html[^>]*>/i);
            expect(indexContent).toMatch(/<head[^>]*>/i);
            expect(indexContent).toMatch(/<body[^>]*>/i);
        });

        test('index.html debe tener título relacionado con TDHStore', () => {
            const title = document.querySelector('title');
            expect(title).toBeTruthy();
            expect(title.textContent.toLowerCase()).toMatch(/tdhstore|tienda|tecnología/);
        });

        test('index.html debe tener un header', () => {
            const header = document.querySelector('header');
            expect(header).toBeTruthy();
        });

        test('index.html debe tener navegación', () => {
            const nav = document.querySelector('nav');
            expect(nav).toBeTruthy();
        });

        test('index.html debe tener al menos 3 productos destacados', () => {
            const productos = document.querySelectorAll('img[src*="productos"]');
            expect(productos.length).toBeGreaterThanOrEqual(3);
        });

        test('index.html debe tener footer', () => {
            const footer = document.querySelector('footer');
            expect(footer).toBeTruthy();
        });
    });

    // Tests de hipervínculos
    describe('Hipervínculos', () => {
        test('index.html debe tener enlaces a páginas internas', () => {
            const indexPath = path.join(basePath, 'index.html');
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const links = document.querySelectorAll('a[href]');
                const hasInternalLinks = Array.from(links).some(link => 
                    link.href.includes('pages/') || 
                    link.href.includes('.html')
                );
                expect(hasInternalLinks).toBe(true);
            }
        });

        test('páginas en pages/ deben tener enlace de regreso al inicio', () => {
            const productosPath = path.join(basePath, 'pages/productos.html');
            if (fs.existsSync(productosPath)) {
                const content = fs.readFileSync(productosPath, 'utf8');
                expect(content).toMatch(/href=['"]\.\.\/index\.html['"]|href=['"]\.\.\/['"]|href=['"]\/index\.html['"]/);
            }
        });
    });

    // Tests de imágenes
    describe('Imágenes y Alt Text', () => {
        test('index.html debe tener imágenes con atributo alt', () => {
            const indexPath = path.join(basePath, 'index.html');
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                const dom = new JSDOM(content);
                const document = dom.window.document;
                
                const images = document.querySelectorAll('img');
                images.forEach(img => {
                    expect(img.hasAttribute('alt')).toBe(true);
                });
            }
        });

        test('debe existir al menos una imagen de logo', () => {
            const logoFiles = ['logo.png', 'logo.jpg', 'logo.svg'];
            const logoExists = logoFiles.some(file => 
                fs.existsSync(path.join(basePath, 'assets/images/logos', file))
            );
            expect(logoExists).toBe(true);
        });

        test('debe existir al menos cinco imágenes de productos', () => {
            const productosDir = path.join(basePath, 'assets/images/productos');
            if (fs.existsSync(productosDir)) {
                const files = fs.readdirSync(productosDir);
                const imageFiles = files.filter(file => 
                    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
                );
                expect(imageFiles.length).toBeGreaterThanOrEqual(5);
            }
        });
    });

    // Tests de vinculación CSS/JS
    describe('Vinculación de Recursos', () => {
        test('HTML debe vincular el archivo CSS', () => {
            const indexPath = path.join(basePath, 'index.html');
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                expect(content).toMatch(/<link[^>]*href=['"][^'"]*styles\.css['"][^>]*>/);
            }
        });

        test('HTML debe vincular el archivo JavaScript', () => {
            const indexPath = path.join(basePath, 'index.html');
            if (fs.existsSync(indexPath)) {
                const content = fs.readFileSync(indexPath, 'utf8');
                expect(content).toMatch(/<script[^>]*src=['"][^'"]*main\.js['"][^>]*>/);
            }
        });
    });
});
