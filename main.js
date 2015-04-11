var terminal = new Terminal('terminal', {
  welcome: "Welcome to Hebi's Home terminal</br>Type 'help' to start"
}, {
  execute: function(cmd, args) {
    var commands = ["clear", "help", "about"];
    switch (cmd) {
      case 'clear':
        terminal.clear();
        return '';
      case 'help':
        return '<div class="ls-files">' + commands.join("<br>") + '</div>';
      case 'about':
        return '<h2>Hebi Li</h2>'
        + '<div><a href="http://lihebi.com" target="_blank">lihebi.com</a></div>'
        + '<div><a href="http://github.com/lihebi" target="_blank">Github</a></div>';

      case 'theme':
        if (args && args[0]) {
          if (args.length > 1) return 'Too many arguments';
          else if (args[0].match(/^interlaced|modern|white$/)) { terminal.setTheme(args[0]); return ''; }
          else return 'Invalid theme';
        }
        return terminal.getTheme();

      case 'ver':
      case 'version':
        return '<div>1.0.0</div>';

      default:
        // Unknown command.
        return false;
    };
  }
});
