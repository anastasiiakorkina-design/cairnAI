import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { fullName, workEmail, organisationName, jobTitle, organisationType, employeeCount } =
      body;

    if (!fullName || !workEmail || !organisationName || !jobTitle || !organisationType || !employeeCount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Send this to HubSpot or your CRM via their API
    // 2. Send confirmation email to the user
    // 3. Notify your sales team
    // 4. Store in database

    console.log('Demo request received:', {
      timestamp: new Date().toISOString(),
      fullName,
      workEmail,
      organisationName,
      jobTitle,
      organisationType,
      employeeCount,
      specificNeeds: body.specificNeeds || '',
    });

    // TODO: Integrate with actual CRM/email service
    // For now, return success
    return NextResponse.json(
      {
        message: 'Demo request submitted successfully',
        data: {
          fullName,
          workEmail,
          organisationName,
          jobTitle,
          organisationType,
          employeeCount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
