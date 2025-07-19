import pdfParse from "pdf-parse/lib/pdf-parse.js";

export const extractPDFText = async (req, res, next) => {
  try {

     if (req.body?.prompt) {
      console.log("Using prompt from body:", req.body.prompt);
      req.prompt = req.body.prompt;
      return next();
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'no pdf file found'
      });
    }


    const dataBuffer = req.file.buffer;
    const data = await pdfParse(dataBuffer);
    console.log(data.text);
    req.prompt = data.text;
    next();

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to parse PDF" });
  }
};