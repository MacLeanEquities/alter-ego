// AI OS app shell - the primary interaction (input -> action -> result),
// wired as real, deterministic client behavior on the shared kit's design
// tokens. Vertical-agnostic: this file carries no venture specifics.
//
// The ACTION LOGIC is DEFERRED: the ui_spec for this app specifies no
// client-computable transform, so the result view LABELS that deferral rather
// than fake a result. The input -> action -> result wiring itself is real and
// deterministic; only the transform is left to a spec that defines it.
(function () {
  var root = document.getElementById("aios-app-root");
  if (!root) return;
  root.setAttribute("data-aios-app-shell", "1");

  var label = document.createElement("label");
  label.setAttribute("for", "aios-app-input");
  label.textContent = "Input";
  label.style.display = "block";
  label.style.marginBottom = "var(--aios-space-2, 0.5rem)";

  var input = document.createElement("input");
  input.id = "aios-app-input";
  input.setAttribute("data-aios-app-input", "1");
  input.type = "text";
  input.placeholder = "Enter a value to run the action";
  input.style.width = "100%";
  input.style.boxSizing = "border-box";
  input.style.padding = "var(--aios-space-3, 0.75rem)";
  input.style.border = "1px solid var(--aios-color-border, #cccccc)";
  input.style.borderRadius = "var(--aios-radius-md, 6px)";

  var button = document.createElement("button");
  button.type = "button";
  button.setAttribute("data-aios-app-action", "1");
  button.textContent = "Run";
  button.style.marginTop = "var(--aios-space-3, 0.75rem)";
  button.style.padding = "var(--aios-space-3, 0.75rem) var(--aios-space-4, 1rem)";
  button.style.border = "0";
  button.style.borderRadius = "var(--aios-radius-md, 6px)";
  button.style.background = "var(--aios-color-accent, #2563eb)";
  button.style.color = "var(--aios-color-on-accent, #ffffff)";
  button.style.cursor = "pointer";

  var result = document.createElement("pre");
  result.setAttribute("data-aios-app-result", "1");
  result.setAttribute("aria-live", "polite");
  result.style.marginTop = "var(--aios-space-4, 1rem)";
  result.style.whiteSpace = "pre-wrap";
  result.hidden = true;

  function render(text) {
    result.hidden = false;
    result.textContent = text;
  }

  button.addEventListener("click", function () {
    var value = (input.value || "").trim();
    if (!value) { render("Enter a value to run the action."); return; }
    render(
      "Action received input: " + value + "\n\n" +
      "[deferred] The action logic for this app is not specified in the ui_spec, " +
      "so no result is computed here. This input -> action -> result view is " +
      "wired and deterministic; the transform is left to a spec that defines it."
    );
  });

  root.appendChild(label);
  root.appendChild(input);
  root.appendChild(button);
  root.appendChild(result);
})();
