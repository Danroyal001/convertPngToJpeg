/**
 * @webonly
 * 
 * This function converts a png image to an equivilent jpeg image. 
 * 
 * @author Daroyal001 - danieleffiong.com - github.com/danroyal001/convertPngToJpg.git.
 * 
 * @param imgUrl The URL of the image to be converted. Supports relative, absolute nd data url formats.
 * @param width The width of the image
 * @param height The Height of the imag
 * @returns {string} The data url f the resultatnt jpeg image
 */
const convertPngToJpg = (imgUrl: string, width: number, height: number) => {

    const img = new Image(width, height);
    document.body.appendChild(img);
    img.crossOrigin = 'anonymous';
    img.src = imgUrl;

    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.height = height;
    canvas.width = width;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, width, height);
    
    const url = canvas.toDataURL('image/jpeg', 1);

    canvas.remove();
    img.remove();

    return url;

}
export default convertPngToJpg;
