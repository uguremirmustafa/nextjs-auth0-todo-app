/** @format */

import auth0 from '../utils/auth0';
import { table } from '../utils/Airtable';

const ownsRecord = (handler) =>
  auth0.requireAuthentication(async (req, res) => {
    const { user } = await auth0.getSession(req);
    const { id } = req.body;
    try {
      const existingRecord = await table.find(id);
      if (!existingRecord || existingRecord.fields.userId !== user.sub) {
        res.statusCode = 404;
        return res.json({ msg: 'record not found' });
      }
      req.record = existingRecord;
      return handler(req, res);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      return res.json({ msg: 'something went wrong!' });
    }
  });
export default ownsRecord;
