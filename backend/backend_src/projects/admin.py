from django.contrib import admin

# Register your models here.

from .models import ActiveProject, PastProject, DummyPeopleModel, Papers


# admin.site.register(Book)


admin.site.register(ActiveProject)
admin.site.register(PastProject)
admin.site.register(DummyPeopleModel)
admin.site.register(Papers)
