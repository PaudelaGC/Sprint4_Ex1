import express from 'express'
import fileUpload from 'express-fileupload'
import fileExtensionLimiter from '.././middlewares/fileExtensionLimiter'
import fileExists from '.././middlewares/fileExists'
import fileSaver from '../middlewares/fileSaver'
const router = express.Router()

/**
 * Allows file upload, checks if there is any upload, checks the file extension and saves it in /files.
 * Multiple files can be uploaded at the same time.
 */
router.post('/', fileUpload(), fileExists(), fileExtensionLimiter(), fileSaver())

export default router
