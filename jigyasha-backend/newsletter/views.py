from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import NewsletterSubscriberSerializer
import logging

logger = logging.getLogger(__name__)

class SubscribeView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        try:
            logger.info(f"Received data: {request.data}")
            serializer = NewsletterSubscriberSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'message': 'Thank you for subscribing to our newsletter!',
                    'success': True
                }, status=status.HTTP_201_CREATED)
            logger.error(f"Validation errors: {serializer.errors}")
            return Response({
                'message': 'Subscription failed.',
                'errors': serializer.errors,
                'success': False
            }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.exception("Error in subscription view")
            return Response({
                'message': f'An unexpected error occurred: {str(e)}',
                'success': False
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)