const assert = require('chai').assert;
const mocha = require('mocha'); 
const fetchMock = require('fetch-mock');

const { submitComment, fetchAndDisplayComments } = require('./script.js');

describe('submitComment', function() {
  afterEach(() => {
    fetchMock.restore(); 
  });

  it('should submit a comment', async function() {
    fetchMock.post('/submit-comment', 200);

    try {
      await submitComment('runId', 'commentText', 'token');
      assert.ok(fetchMock.called('/submit-comment')); 
    } catch (error) {
      assert.fail(error);
    }
  });

  it('should throw an error if submission fails', async function() {
    fetchMock.post('/submit-comment', 500);

    try {
      await submitComment('runId', 'commentText', 'token');
      assert.fail('expected an error to be thrown'); 
    } catch (error) {
      assert.strictEqual(error.message, 'failed to submit comment: internal server error'); 
    }
  });
});

describe('fetchAndDisplayComments', function() {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch and display comments', async function() {
    const comments = [{ userId: 'testUser', commentText: 'test comment', timestamp: Date.now() }];
    fetchMock.get('/fetch-comments/runId', comments);

    try {
      await fetchAndDisplayComments('runId');
      assert.strictEqual(fetchMock.calls().matched.length, 1); 
    } catch (error) {
      assert.fail(error); 
    }
  });

  it('should throw error if fetching fails', async function() {
    fetchMock.get('/fetch-comments/runId', 500);

    try {
      await fetchAndDisplayComments('runId');
      assert.fail('expected an error to be thrown'); 
    } catch (error) {
      assert.strictEqual(error.message, 'failed to load comments: internal server error');
    }
  });
});
