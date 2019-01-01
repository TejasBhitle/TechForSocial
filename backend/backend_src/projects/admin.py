from django.contrib import admin

# Register your models here.

from .models import ActiveProject, DummyPeopleModel, Papers


# admin.site.register(Book)


admin.site.register(ActiveProject)
admin.site.register(DummyPeopleModel)
admin.site.register(Papers)
