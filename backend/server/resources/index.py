from flask import Blueprint, json, render_template, send_from_directory
import os

def create_index_blueprint(debug):
    index_blueprint = Blueprint("index_blueprint", __name__)
    
    manifest = None
    if not debug:
        manifest_path = os.path.join(os.path.dirname(__file__), '../../dist/manifest.json')
        try:
            with open(manifest_path) as f:
                manifest = json.load(f)
        except FileNotFoundError:
            raise RuntimeError("Missing dist/manifest.json. Did you run `npm run build` in the frontend?")

    @index_blueprint.route("/")
    def index():
        if debug:
            return render_template("index.html", debug=True, entry_file=None)
        else:
            entry = manifest['src/main.js']['file']
            return render_template("index.html", debug=False, entry_file=entry)

    @index_blueprint.route('/dist/<path:filename>')
    def dist(filename):
        return send_from_directory('dist', filename)

    return index_blueprint