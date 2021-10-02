import jimp from 'jimp';
import path from 'path';

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
     * @returns {Promise<Buffer>}
     * @private
     * @async
     */
    private static async overlay(
        imageBuffer: Buffer,
        flagName: string,
        opacity: number = 0.5
    ): Promise<Buffer> {
        // Load the images
        const image = await jimp.read(imageBuffer);
        const flag = await jimp.read(path.join(__dirname, '..', 'assets', `${flagName}.png`));

        // Resize the flag
        flag.resize(image.getWidth(), image.getHeight());

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
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static agender(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'agender', opacity);
    }

    /**
     * Overlay the heterosexual ally flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static ally(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'ally', opacity);
    }

    /**
     * Overlay the aromantic flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static aromantic(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'aromantic', opacity);
    }

    /**
     * Overlay the asexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static asexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'asexual', opacity);
    }

    /**
     * Overlay the bisexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static bisexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'bisexual', opacity);
    }

    /**
     * Overlay the demisexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static demisexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'demisexual', opacity);
    }

    /**
     * Overlay the genderfluid flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static genderfluid(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'genderfluid', opacity);
    }

    /**
     * Overlay the gender-queer flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static genderqueer(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'genderqueer', opacity);
    }

    /**
     * Overlay the homosexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static homosexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'homosexual', opacity);
    }

    /**
     * Overlay the intersex flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static intersex(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'intersex', opacity);
    }

    /**
     * Overlay the lesbian flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static lesbian(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'lesbian', opacity);
    }

    /**
     * Overlay the nonbinary flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static nonbinary(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'nonbinary', opacity);
    }

    /**
     * Overlay the pansexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static pansexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'pansexual', opacity);
    }

    /**
     * Overlay the polyamorous flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static polyamory(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'polyamory', opacity);
    }

    /**
     * Overlay the polysexual flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static polysexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'polysexual', opacity);
    }

    /**
     * Overlay the progress flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static progress(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'progress', opacity);
    }

    /**
     * Overlay the transgender flag over an image!
     * @param {Buffer} imageBuffer The buffer of the image to overlay the flag onto
     * @param {number} [opacity] The opacity to set the flag to
     * @returns {Promise<Buffer>}
     */
    static transgender(imageBuffer: Buffer, opacity?: number): Promise<Buffer> {
        return this.overlay(imageBuffer, 'transgender', opacity);
    }
}

export { Pride };
export default Pride;
