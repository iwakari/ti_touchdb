// open a single window
var window = Ti.UI.createWindow({
  layout: 'vertical',
  backgroundColor: 'white'
});

// turn on logging
Ti.App.Properties.setBool("Log", true);
Ti.App.Properties.setBool("LogSync", true);
Ti.App.Properties.setBool("LogSyncVerbose", true);

var testname = Ti.UI.createLabel();
window.add(testname);

var status = Ti.UI.createLabel();
window.add(status);

var imageView1 = Ti.UI.createImageView();
window.add(imageView1);

var imageView2 = Ti.UI.createImageView();
window.add(imageView2);

window.addEventListener('open', function() {
  Ti.API.info("starting tests");
  try {
    testname.text = '001_module';
    require('001_module').run_tests();
    testname.text = '002_databaseManager';
    require('002_databaseManager').run_tests();
    testname.text = '003_database';
    require('003_database').run_tests();
    testname.text = '004_database_query';
    require('004_database_query').run_tests();
    testname.text = '005_database_validation';
    require('005_database_validation').run_tests();
    testname.text = '006_document';
    require('006_document').run_tests();
    testname.text = '007_revisions';
    require('007_revisions').run_tests();
    testname.text = '008_attachments';
    require('008_attachments').run_tests();
    testname.text = '009_views';
    require('009_views').run_tests();
    testname.text = '010_change_tracking';
    require('010_change_tracking').run_tests();
    testname.text = '011_update_in_query';
    require('011_update_in_query').run_tests();
    testname.text = '012_history';
    require('012_history').run_tests();
    testname.text = '013_view_linked_docs';
    require('013_view_linked_docs').run_tests();
    testname.text = '014_replication';
    require('014_replication').run_tests();
    testname.text = '015_filtered_replication';
    require('015_filtered_replication').run_tests();
    if (Ti.Platform.name !== 'android') {
      // internal replication not yet supported on Android
      testname.text = '016_internal_replication';
      require('016_internal_replication').run_tests();
    }
    testname.text = "all tests passed! whoopee!";
  }
  catch (e) {
    Ti.API.error(JSON.stringify(e));
    status.text = e;
  }
});

window.open();
