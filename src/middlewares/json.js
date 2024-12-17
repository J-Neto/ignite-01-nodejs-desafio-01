export async function json(req, res) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const rawBody = Buffer.concat(buffers).toString()

  const contentType = req.headers['content-type'];
  
  // Read CSV
  if (contentType && contentType.includes('multipart/form-data')) {
    try {
      req.rawBody = rawBody
    } catch {
      req.rawBody = null
    }
    res.setHeader('Content-type', 'multipart/form-data')
  }

  else if (contentType && contentType === 'application/json') {
    try {
      req.body = JSON.parse(rawBody)
    } catch {
      req.body = null
    }
    res.setHeader('Content-type', 'application/json')
  }

  else {
    req.rawBody = rawBody
    res.setHeader('Content-type', 'application/json')
  }
}