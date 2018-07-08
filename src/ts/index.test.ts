'use strict';

import Sum from './index'
import { expect } from 'chai'

describe('Sum should:', () => {
  describe('sum', () => {
    it('1 + 1 = 2', () => {
      expect(Sum(1, 1)).to.be.equal(2)
    })
  })
})
