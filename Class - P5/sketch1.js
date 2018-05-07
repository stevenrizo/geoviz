var table;

function setup() {
  table = new p5.Table();

  table.addColumn('id');
  table.addColumn('species');
  table.addColumn('name');

  var newRow = table.addRow();
  newRow.setNum('id', 121);
  newRow.setString('species', 'Panthera leo');
  newRow.setString('name', 'Lion');

  // To save, un-comment next line then click 'run'
  saveTable(table, 'new.csv');
  }

  // Saves the following to a file called 'new.csv':
  // id,species,name
  // 0,Panthera leo,Lion
