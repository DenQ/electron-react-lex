import { PROJET_NAME } from 'lex/constants/custom';

export default function(msg) {
  return new Notification(PROJET_NAME, {
    body: msg,
  });
}
