from django.contrib import admin

from blog.models import Category, Tag, Blog
class BlogsPostAdmin(admin.ModelAdmin):
	list_display=('title','created','category',)
	search_fields = ('category',)

admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Blog,BlogsPostAdmin)
