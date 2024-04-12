import core.fts5_extension as fts5_extension

def setup_fts5_extension(sender, **kwargs):
    fts5_extension.enable_fts5_extension()

# Import the required signals
from django.db.backends.signals import connection_created

# Connect the signal to the function
connection_created.connect(setup_fts5_extension)