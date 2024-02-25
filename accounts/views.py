from django.contrib.auth import get_user_model

User = get_user_model()


from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
# Create your views here.

class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request,format = None):
        data = self.request.data

        name = data['name']
        email = data['email']
        password1 = data['password1']
        password2 = data['password2']

        if password1 == password2:

            if User.objects.filter(email=email).exists():
                return Response({'error' : 'user exist'})
            else:
                if len(password1) < 6:
                    return Response({'error' : 'passoword must be atleast 6 charcters '})
                else:
                    user = User.objects.create_user(email=email,password=password1,name = name)
                    user.save()
                    return Response({'success' : 'user created successfully'})
        else:
            return Response({'error':'password do not match'})
