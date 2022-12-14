import { NowRequest, NowResponse } from '@now/node';
import { updateReadme } from '../utils/github/updateReadme';

const allowedEmojis: Record<string, boolean> = {
  'đ': true,
  'đ': true,
  'đ': true,
  'â¤ī¸': true,
  'đ': true,
  'đ¤': true,
  'đ': true,
  'đ': true,
  'đ': true,
  'đ': true,
};
export default async (req: NowRequest, res: NowResponse) => {
  const type = String(req.query.type);

  if (allowedEmojis[type]) {
    // update the readme.md in the repo, add count by 1
    try {
      await updateReadme(type);

      res.setHeader('Location', 'https://github.com/bagasbawazir');
      res.status(302);
      res.json({ message: 'âŠī¸'})
    } catch (err) {
      res
        .status(500)
        .json({ message: 'đą', error: err.message, stack: err.stack });
    }
  } else {
    res.status(403).json({ message: 'đ ' });
  }
};
