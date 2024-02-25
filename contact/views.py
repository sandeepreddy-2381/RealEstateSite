from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail 
from .models import Contact


class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def post(self,request,format = None):
        data = self.request.data
        try:
            send_mail(
                data['subject'],
                'Name: '+
                data['name']+
                '\nEmail :'+
                data['email']+
                '\n\n message \n'+
                data['message'],
                'demo2002reddy@gmail.com',
                ['demo2002reddy@gmail.com'],
                fail_silently=False    
            )
            contact = Contact(name = data['name'] , email = data['email'],subject = data['subject'],message = data['meessage'])
            contact.save()

            return Response ({'success':'message sent'})
        
        except  Exception as e:
            # Print the error message
            print("Error:", e)
            return Response({'error': 'message failed to sent'})


