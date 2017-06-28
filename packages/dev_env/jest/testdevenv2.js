/* eslint-disable no-console */
import path from 'path';
import fs from 'fs-extra';
// import walkSync from 'walk-sync';
import scrape from 'website-scraper';
import { spawn } from 'child_process';
import shellCommand from '../shell-command';

var assert = require('assert');
describe('asdf', function() {
  this.timeout(30000);
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', (done) => {
      console.log('hmmmm');
      setTimeout(() => {
        assert.equal(-1, [1,2,3].indexOf(4));
        done();
      },3000);
      
    });
  });

  
});