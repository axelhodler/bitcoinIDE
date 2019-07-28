Bitcoin Script IDE
============================

A Bitcoin Script IDE to facilitate the learning, testing, and teaching of Bitcoin Script.

Features
--------

* Syntax highlighting
* Auto-complete
* Translation to and from assembly
* Stack visualizer
* Step-by-step debugger

Try it out!
--------------------
1. Open up IDE in https://axelhodler.github.io/bitcoinIDE/
2. In the **Script pane**, type in some script code:
  * ex. <255044462d312e330a25e2e3cfd30a0a0a312030206f626a0a3c3c2f57696474682032203020522f4865696768742033203020522f547970652034203020522f537562747970652035203020522f46696c7465722036203020522f436f6c6f7253706163652037203020522f4c656e6774682038203020522f42697473506572436f6d706f6e656e7420383e3e0a73747265616d0affd8fffe00245348412d3120697320646561642121212121852fec092339759c39b1a1c63c4c97e1fffe017f46dc93a6b67e013b029aaa1db2560b45ca67d688c7f84b8c4c791fe02b3df614f86db1690901c56b45c1530afedfb76038e972722fe7ad728f0e4904e046c230570fe9d41398abe12ef5bc942be33542a4802d98b5d70f2a332ec37fac3514e74ddc0f2cc1a874cd0c78305a21566461309789606bd0bf3f98cda8044629a1> OP_SHA1
  * ex. 1  2  OP_ADD
  * ex. 123  OP_HASH256
  * ex. 1  OP_IF  2  OP_ELSE  3  OP_ENDIF
3. View the equivalent assembly code by clicking the **Assembly tab**
4. To execute the script, return to the Script tab and hit the **Run** button on the bottom to run the code
5. Note the stack operations in the **Stack pane** on the right.
6. To process the script one command at a time, hit the **Step** button on the bottom
7. Note the stack operations
8. Note the text box on the bottom that shows the next command
9. To process the remainder of the commands, hit the **Continue** button on the bottom
10. If the script was a valid script, then the text box on the bottom will be green and the stack elements will be orange.
11. If the script was invalid, then the text box and the stack elements will be red



