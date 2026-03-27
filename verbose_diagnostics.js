async function runDiagnostics() {
  const modulesToTest = [
    './lib/mongodb',
    './routes/places',
    './routes/restaurant',
    './routes/culture',
    './routes/translate',
    './routes/assistant',
    './routes/quests',
    './routes/stories',
    './routes/safety'
  ];

  for (const mod of modulesToTest) {
    try {
      console.log(`[TEST] Requiring ${mod}...`);
      require(mod);
      console.log(`[PASS] ${mod} loaded successfully.`);
    } catch (err) {
      console.error(`[FAIL] ${mod} failed to load!`);
      console.error(`Error Type: ${err.constructor.name}`);
      console.error(`Error Message: ${err.message}`);
      if (err.code) console.error(`Error Code: ${err.code}`);
      console.error(`Stack Trace: ${err.stack}`);
      process.exit(1);
    }
  }
  console.log("All critical modules passed diagnostics.");
}

runDiagnostics();
