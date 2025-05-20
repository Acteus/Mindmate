import 'package:flutter/material.dart';

class JournalScreen extends StatefulWidget {
  const JournalScreen({Key? key}) : super(key: key);

  @override
  _JournalScreenState createState() => _JournalScreenState();
}

class _JournalScreenState extends State<JournalScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Journal')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // TODO: Implement journal entry list
            const Text('Journal Entries'),
            // TODO: Add journal entry creation button
            ElevatedButton(
              onPressed: () {
                // TODO: Implement new journal entry
              },
              child: const Text('New Entry'),
            ),
          ],
        ),
      ),
    );
  }
}
