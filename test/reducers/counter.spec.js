import counter from '../../app/reducers/counter';
import { SET_100_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../app/actions/counter';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(counter(undefined, {})).toMatchSnapshot();
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(counter(1, { type: INCREMENT_COUNTER })).toMatchSnapshot();
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(counter(1, { type: DECREMENT_COUNTER })).toMatchSnapshot();
    });

    it('should handle SET_100_COUNTER', () => {
      expect(counter(100, { type: SET_100_COUNTER })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(counter(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
