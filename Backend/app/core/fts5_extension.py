from django.db import connection

def enable_fts5_extension():
    with connection.cursor() as cursor:
        cursor.execute("PRAGMA load_extension=fts5;")