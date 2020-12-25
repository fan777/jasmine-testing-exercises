describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a row with server name and tip on updateServerTable()', function() {
    submitServerInfo();

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', 'server1');
    appendTd(newTr, 'Alice');
    appendTd(newTr, '$0.00');

    let checkTr;
    for (let server in allServers) {
      if (allServers[server].serverName === 'Alice') {
        checkTr = serverTbody.querySelector(`#${server}`);
        expect(checkTr).toEqual(newTr);
      }
    }
  });

  afterEach(function() {
    for (let server in allServers) {
      if (allServers[server].serverName === 'Alice') {
        document.getElementById(server).remove();
        delete allServers[server];
        serverId--;
      }
    }
  });
});
