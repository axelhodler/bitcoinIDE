QUnit.test("SHA1 tests", function(assert) {
  assert.ok("356a192b7913b04c54574d18c28d46e6395428ab" == Sha1.hash(1));
  assert.ok("da4b9237bacccdf19c0760cab7aec4a8359010b0" == Sha1.hash(2));
  assert.ok("77de68daecd823babbb58edb1c8e14d7106e83bb" == Sha1.hash("3"));
});
