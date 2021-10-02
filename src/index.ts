import jimp from 'jimp';
import path from 'path';
import sharp from 'sharp';

/**
 * The pride image generator, as used by Ayano!
 * @class
 * @public
 */
class Pride {
    /**
     * Overlays a flag onto an image from its Buffer.
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {string} flagName The name of the flag
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     * @private
     * @async
     */
    private static async overlay(
        imageBuffer: Buffer,
        flagName: string,
        opacity: number = 0.5,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        // Ensure the image buffer is a png
        imageBuffer = await sharp(imageBuffer).toFormat('png').toBuffer();

        // Load the images
        const image = await jimp.read(imageBuffer);
        const flag = await jimp.read(path.join(__dirname, '..', 'assets', `${flagName}.png`));

        // Set the default height and width values
        height = height ?? image.getHeight();
        width = width ?? height ?? image.getWidth();

        // Resize the images
        image.resize(width, height);
        flag.resize(width, height);

        // Set the flag's opacity
        flag.opacity(opacity);

        // Overlay the flag onto the image
        image.blit(flag, 0, 0);

        // Return the manipulated image's buffer
        return image.getBufferAsync(jimp.MIME_PNG);
    }

    /**
     * Overlay the agender flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static agender(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'agender', opacity, width, height);
    }

    /**
     * Overlay the heterosexual ally flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static ally(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'ally', opacity, width, height);
    }

    /**
     * Overlay the aromantic flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static aromantic(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'aromantic', opacity, width, height);
    }

    /**
     * Overlay the asexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static asexual(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'asexual', opacity, width, height);
    }

    /**
     * Overlay the bisexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static bisexual(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'bisexual', opacity, width, height);
    }

    /**
     * Overlay the demisexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static demisexual(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'demisexual', opacity, width, height);
    }

    /**
     * Overlay the genderfluid flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static genderfluid(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'genderfluid', opacity, width, height);
    }

    /**
     * Overlay the gender-queer flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static genderqueer(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'genderqueer', opacity, width, height);
    }

    /**
     * Overlay the homosexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static homosexual(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'homosexual', opacity, width, height);
    }

    /**
     * Overlay the intersex flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static intersex(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'intersex', opacity, width, height);
    }

    /**
     * Overlay the lesbian flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static lesbian(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'lesbian', opacity, width, height);
    }

    /**
     * Overlay the nonbinary flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static nonbinary(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'nonbinary', opacity, width, height);
    }

    /**
     * Overlay the pansexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static pansexual(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'pansexual', opacity, width, height);
    }

    /**
     * Overlay the polyamorous flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static polyamory(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'polyamory', opacity, width, height);
    }

    /**
     * Overlay the polysexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static polysexual(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'polysexual', opacity, width, height);
    }

    /**
     * Overlay the progress flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static progress(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'progress', opacity, width, height);
    }

    /**
     * Overlay the transgender flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity=0.5] The opacity to set the flag to
     * @param {number} [width] The width of the output image
     * @param {number} [height] The height of the output image. If the width is defined, it will equal that.
     * @returns {Promise<Buffer>}
     */
    static transgender(
        imageBuffer: Buffer,
        opacity?: number,
        width?: number,
        height?: number
    ): Promise<Buffer> {
        return this.overlay(imageBuffer, 'transgender', opacity, width, height);
    }
}

export { Pride };
export default Pride;
